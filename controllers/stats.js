const Stats = require('../models/Stats');


exports.getStats = async (req, res, next) => {
    try {
        const stats = await Stats.find()

        return res.status(200).json({
            success: true,
            count: stats.length,
            data: stats
        })
    } catch (err) {
        return res.send(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}

exports.addStats = async (req, res, next) => {
    try {
        const {horsepower} = req.body;

        const stats = await Stats.create(req.body)

        return res.status(201).json({
            success: true,
            data: stats
        })

    } catch (err) {
        console.log(err);
    }
}

exports.deleteStats = async (req, res, next) => {
    try {
        const stats = await Stats.findById(req.params.id);

        if (!stats){
            return res.status(404).json({
                success: false,
                error: 'No stats'
            });
        }

        await stats.deleteOne();

        return res.status(200).json({
            success: true,
            data: {}

        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            error: 'Server error'
        });
    }
}


exports.updateStats = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const stats = await Stats.findById(id);

        if (!stats) {
            return res.status(404).json({
                success: false,
                error: 'No stats found'
            });
        }

        await Stats.updateOne({ _id: id }, updateData, { runValidators: true });

        const updatedStats = await Stats.findById(id); // Fetch the updated document

        return res.status(200).json({
            success: true,
            data: updatedStats
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};
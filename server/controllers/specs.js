const Specs = require('../models/Specs');


exports.getSpecs = async (req, res, next) => {
    try {
        const specs = await Specs.find()

        return res.status(200).json({
            success: true,
            count: specs.length,
            data: specs
        })
    } catch (err) {
        return res.send(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}

exports.addSpecs = async (req, res, next) => {
    try {
        const {horsepower} = req.body;

        const specs = await Specs.create(req.body)

        return res.status(201).json({
            success: true,
            data: specs
        })

    } catch (err) {
        console.log(err);
    }
}

exports.deleteSpecs = async (req, res, next) => {
    try {
        const specs = await Specs.findById(req.params.id);

        if (!specs){
            return res.status(404).json({
                success: false,
                error: 'No stats'
            });
        }

        await specs.deleteOne();

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


exports.updateSpecs = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const specs = await Specs.findById(id);

        if (!specs) {
            return res.status(404).json({
                success: false,
                error: 'No stats found'
            });
        }

        await Specs.updateOne({ _id: id }, updateData, { runValidators: true });

        const updatedSpecs = await Specs.findById(id); // Fetch the updated document

        return res.status(200).json({
            success: true,
            data: updatedSpecs
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};
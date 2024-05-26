const About = require('../models/About');


exports.getAbout = async (req, res, next) => {
    try {
        const about = await About.find()

        return res.status(200).json({
            success: true,
            count: about.length,
            data: about
        })
    } catch (err) {
        return res.send(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}

exports.addAbout = async (req, res, next) => {
    try {
        

        const about = await About.create(req.body)

        return res.status(201).json({
            success: true,
            data: about
        })

    } catch (err) {
        console.log(err);
    }
}

exports.deleteAbout = async (req, res, next) => {
    try {
        const about = await About.findById(req.params.id);

        if (!about){
            return res.status(404).json({
                success: false,
                error: 'No about'
            });
        }

        await about.deleteOne();

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


exports.updateAbout = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const about = await About.findById(id);

        if (!about) {
            return res.status(404).json({
                success: false,
                error: 'No stats found'
            });
        }

        await About.updateOne({ _id: id }, updateData, { runValidators: true });

        const updatedAbout = await About.findById(id); // Fetch the updated document

        return res.status(200).json({
            success: true,
            data: updatedAbout
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};
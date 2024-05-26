const Drivers = require('../models/Drivers');


exports.getDrivers = async (req, res, next) => {
    try {
        const drivers = await Drivers.find()

        return res.status(200).json({
            success: true,
            count: drivers.length,
            data: drivers
        })
    } catch (err) {
        return res.send(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}

exports.addDrivers = async (req, res, next) => {
    try {
        

        const drivers = await Drivers.create(req.body)

        return res.status(201).json({
            success: true,
            data: drivers
        })

    } catch (err) {
        console.log(err);
    }
}

exports.deleteDrivers = async (req, res, next) => {
    try {
        const drivers = await Drivers.findById(req.params.id);

        if (!drivers){
            return res.status(404).json({
                success: false,
                error: 'No dirvers'
            });
        }

        await drivers.deleteOne();

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


exports.updateDrivers = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const drivers = await Drivers.findById(id);

        if (!drivers) {
            return res.status(404).json({
                success: false,
                error: 'No drivers found'
            });
        }

        await Drivers.updateOne({ _id: id }, updateData, { runValidators: true });

        const updatedDrivers = await Drivers.findById(id); // Fetch the updated document

        return res.status(200).json({
            success: true,
            data: updatedDrivers
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};
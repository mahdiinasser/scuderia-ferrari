const News = require('../models/News');


exports.getNews = async (req, res, next) => {
    try {
        const news = await News.find()

        return res.status(200).json({
            success: true,
            count: news.length,
            data: news
        })
    } catch (err) {
        return res.send(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}

exports.addNews = async (req, res, next) => {
    try {
        

        const news = await News.create(req.body)

        return res.status(201).json({
            success: true,
            data: news
        })

    } catch (err) {
        console.log(err);
    }
}

exports.deleteNews = async (req, res, next) => {
    try {
        const news = await News.findById(req.params.id);

        if (!news){
            return res.status(404).json({
                success: false,
                error: 'No news'
            });
        }

        await news.deleteOne();

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


exports.updateNews = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const news = await News.findById(id);

        if (!news) {
            return res.status(404).json({
                success: false,
                error: 'No news found'
            });
        }

        await News.updateOne({ _id: id }, updateData, { runValidators: true });

        const updatedNews = await News.findById(id); // Fetch the updated document

        return res.status(200).json({
            success: true,
            data: updatedNews
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};
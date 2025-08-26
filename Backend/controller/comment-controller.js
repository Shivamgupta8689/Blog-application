import Comment from '../model/comment.js';


export const newComment = async (request, response) => {
    try {
        const newComm = new Comment(request.body);
        await newComm.save();

        response.status(200).json('Comment saved successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}

export const getComments = async (request, response) => {
    try {
        const comments = await Comment.find({ postId: request.params.id });
        
        response.status(200).json(comments);
    } catch (error) {
        response.status(500).json({ error: error.message })
    }
}

export const deleteComment = async (request, response) => {
    try {
        const delComment = await Comment.findById(request.params.id);
        if (!delComment) {
            return response.status(404).json({ message: 'Comment not found' });
        }
        await Comment.findByIdAndDelete(request.params.id);
        response.status(200).json('comment deleted successfully');
    } catch (error) {
        response.status(500).json(error.message)
    }
}
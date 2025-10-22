const Request = require("../../models/Request")

const post = async (req, res) => {
    const findRequest = await Request.findBePk(req.params.id)

    if(!findRequest) return res.status(401).json({ok : false, err : "Request not found"})

    await findRequest.update({
        blocked: !findRequest.blocked,
        blockedDescription : req.body.blockedDescription || ''
    })

    res.redirect(`/requests/${req.params.id}`)
}

module.exports = {
    post
}
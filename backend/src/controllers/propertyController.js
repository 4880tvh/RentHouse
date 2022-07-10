
const { v4: uuidv4 } = require('uuid');
const db = require('../models/index')
const propertyService = require('../services/propertyService')

let getProperty = async (req, res) => {
    res.status(200).json({ properties })
}

let postProperty = async (req, res) => {
    try {
        let PropertyID = uuidv4();
        await db.Property.create({
            id: PropertyID,
            name: req.body.name,
            address: req.body.address,
            area: req.body.area,
            bedroom: req.body.bedroom,
            bathroom: req.body.bathroom,
            yearBuilt: req.body.yearBuilt,
            price: req.body.price,
            waterPrice: req.body.waterPrice,
            electricPrice: req.body.electricPrice,
            status: 0,
            description: req.body.description,
            districtId: req.body.districtId,
        });
        res.status(200).json("Property added successfully");
    } catch (err) {
        res.status(400).send(err.message);
    }
}

let readAllProperty = async (req, res) => {
    let data = await propertyService.getAllProperty();
    return res.status(200).json({ data: data })
}

let readProperty = async (req, res) => {
    console.log(req)
    let data = await propertyService.getPropertyById(req.params.ID);
    return res.status(200).json({ data: data })
}


let editProperty = async (req, res) => {
    let PropertyID = req.query.id;
    if (PropertyID) {
        let data = await propertyService.getPropertyById(PropertyID);
        if (!data) {
            return res.send('Property not found');
        }
        return res.render('edit.ejs', { data: data })
    } else {
        return res.send('Property not found');
    }
}

let putProperty = async (req, res) => {
    let data = req.params.ID;
    let allProperties = await propertyService.updatePropertyData(data);
    return res.status(200).json({ data: allProperties });
}

let deleteProperty = async (req, res) => {
    let PropertyID = req.query.id;
    let allProperties = await propertyService.deleteProperty(PropertyID);
    return res.render('display.ejs', { data: allProperties })
}

let postRequestTour = async (req, res) => {
    let email = req.body.email

    if (!email) {
        return res.status(400).json("Email required")
    }
    await emailService.sendSimpleEmail(email)
}

module.exports = { getProperty, postProperty, readAllProperty, editProperty, putProperty, deleteProperty, readProperty, postRequestTour }
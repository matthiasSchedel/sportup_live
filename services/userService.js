var User = require("../models/User.model");
const mongoose = require("mongoose");

exports.get = async function (query)
{
  try
  {
    return await User.find(query);
  } catch (e)
  {
    // Log Errors
    console.log(e);
    throw Error("Error while Getting Users");
  }
};

// exports.create = async function (req)
// {
//   try
//   {
//     var user = assignParamsToModel(req);
//     user._id = new mongoose.Types.ObjectId();
//     return await user.save();
//   } catch (e)
//   {
//     // Log Errors
//     console.log(e);
//     throw Error("Error while Creating User");
//   }
// };

exports.create = async function (req)
{
  try
  {
    var user = assignParamsToModel(req);
    user._id = new mongoose.Types.ObjectId();
    return await user.save();
  } catch (e)
  {
    // Log Errors
    console.log(e);
    throw Error("Error while Creating User");
  }
};

exports.findOne = async function (req)
{
  try
  {
    return await User.find(query)(req.params.id);
  } catch (e)
  {
    // Log Errors
    console.log(e);
    throw Error("Error while Getting User");
  }
};

exports.update = async function (req)
{
  try
  {
    return await User.findByIdAndUpdate(
      req.params.id,
      assignParamsToModel(req),
      { new: true }
    );
  } catch (e)
  {
    // Log Errors
    console.log(e);
    throw Error("Error while Updating User");
  }
};

exports.delete = async function (req)
{
  try
  {
    return await User.findByIdAndRemove(req.params.id);
  } catch (e)
  {
    // Log Errors
    console.log(e);
    throw Error("Error while Deleting User");
  }
};

function assignParamsToModel(req)
{
  return new User({
    name: req.body.name,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    description: req.body.description
  });
}

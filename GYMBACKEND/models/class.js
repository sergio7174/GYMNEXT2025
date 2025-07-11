"use strict";

const
mongoose = require("mongoose"),
// Create a new schema with mongoose.Schema.
classSchema = new mongoose.Schema({
 // Add schema properties.

  classname:         {type: String},
  code:              {type: String},
  classday:          {type: String, require: true }, // monday, tuesday ....
  classtime:         {type: String, require: true }, // what time of the day it will begin
  classlevel:        {type: String, require: true }, // medium, basic, high ....
  session_time:      {type: Number, require: true }, // Days number
  price:             {type: Number, require: true },
  trainer:           {type: String, require: true },
  key_benefits:      {type: String, require: true },
  expert_trainer:    {type: String, require: true },
  class_overview:    {type: String, require: true },
  why_matters:       {type: String, require: true },
  dateBegin:         {type: Date,    require: true}, // begin class date
  dateEndClass:      {type: Date},
  image:             {type: String, require: true },
  createdAt:         {type: Date},

  

                                                                             
},{
  // The timestamps property lets Mongoose know to include the createdAt and updatedAt
  // values, which are useful for keeping records on how and when data changes
  timestamps: true
}
);

// schema is defined, you need to apply it to a model and export it
module.exports = mongoose.model("Class", classSchema);
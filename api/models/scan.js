const mongoose = require('mongoose');

var location = new mongoose.Schema({ 
    path: 'string',
    positions: 'string',
    begin: 'number',
    line: 'number',
});

var metadata = new mongoose.Schema({ 
    description: 'string',
    severity: 'string',
});

const findingSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  ruleId: {
    type: String,
    required: true,
  },
  location: location,
  metadata: metadata,

});

const scanSchema = new mongoose.Schema({
  status: {
    type: String,
    required: true,
  },
  repositoryName: {
    type: String,
    required: true,
  },
  queuedAt: {
    type: Date,
    required: true,
  },
  scanningAt: Date,
  finishedAt: Date,
  findings: [findingSchema]
});

// userSchema.statics.findByLogin = async function (login) {
//     let user = await this.findOne({
//       username: login,
//     });
//     if (!user) {
//       user = await this.findOne({ email: login });
//     }
//     return user;
// };

const Scan = mongoose.model('Scan', scanSchema);
module.exports = Scan;
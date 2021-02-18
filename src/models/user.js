const mongoose = require('mongoose');
const model = mongoose.model;
const Schema = mongoose.Schema;
// import * as bcrypt from 'bcryptjs';
const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required:true,
        },
        password: {
            type: String,
            required: true,
        },
        status:{
            // 1 - active,0 - inactive
            type: Number,
            required: true,
            default:1,
        },
        gender:{
            // 1 - male,2 - female
            type: String,
        }
    },
    {
        timestamps: true,
    },
);

userSchema.pre('save', async function save(next) {
	try {
		const saltRounds = 10;
		let salt = await bcrypt.genSaltSync(saltRounds);
		this.password = await bcrypt.hash(this.password, salt);
		return next();
	} catch (err) {
		return next(err);
	}
});

const User = model('user', userSchema);

module.exports = User;

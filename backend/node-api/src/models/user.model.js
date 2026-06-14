import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true
    },

    lastName: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },

    phoneNumber: {
      type: String,
      default: null
    },

    gender: {
      type: String,
      enum: [
        'male',
        'female',
        'other',
        'prefer_not_to_say'
      ],
      default: 'prefer_not_to_say'
    },

    passwordHash: {
      type: String,
      required: true
    },

    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user'
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model(
  'User',
  userSchema
);
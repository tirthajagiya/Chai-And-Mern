import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile: {
      type: String, //from cloudnary
      required: true,
    },
    thumbnail: {
      type: String, //from cloudnary
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    discription: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    view: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

//mongoose aggrigation query using mongoose-aggregate-paginate-v2

videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoSchema);

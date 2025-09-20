import mongoose from "mongoose";

const connect = async (uri: string, options: mongoose.ConnectOptions) => {
  // Setup custom default connection options
  await mongoose.connect(uri, {
    ...options,
    sanitizeFilter: true,
  });
};

const disconnect = async () => {
  await mongoose.disconnect();
};

const withTransaction = async (
  fn: (session: mongoose.ClientSession) => Promise<void>
) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    await fn(session);
    await session.commitTransaction();
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
  }
};

export default { connect, disconnect, withTransaction };

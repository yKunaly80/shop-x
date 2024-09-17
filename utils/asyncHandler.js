// const catchAsync = (fn) => (req, res, next) => {
//     Promise.resolve(fn(req, res, next)).catch((err) => next(err));
// };

// const asyncHandler = (fun) => {
//     return (req, res, next) => {
//         try {
//             Promise.resolve(fun(req, res, next))
//         } catch (error) {
//             next(error)
//         }
//     }
// };

const asyncHandler = (fun) => {
    return async (req, res, next) => {
        try {
            await fun(req, res, next)
        } catch (error) {
            next(error)
        }
    }
};

module.exports = asyncHandler
// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ element: Element, auth, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       element={(props) =>
//         auth ? (
//           <Element {...props} />
//         ) : (
//           <Navigate to="/login" replace state={{ from: props.location }} />
//         )
//       }
//     />
//   );
// };

// export default ProtectedRoute;

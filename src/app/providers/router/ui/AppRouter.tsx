import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { AuthPage } from "@pages/AuthPage";

const AppRouter = () => {
  return (
    <Suspense fallback="loading...">
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;

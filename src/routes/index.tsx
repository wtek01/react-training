import React, { lazy } from "react";
const Home = lazy(() => import("../Home"));
const CleanCode = lazy(() => import("../cleancode"));
const ClosuresDemo = lazy(() => import("../cleancode/closures/ClosuresDemo"));
const Coalescing = lazy(() => import("../cleancode/coalescing/Coalescing"));
const CompositionDemo = lazy(
  () => import("../cleancode/Composition/CompositionDemo")
);
const Curry = lazy(() => import("../cleancode/Curry"));
const Performance = lazy(() => import("../performance"));
const StopUsingUseEffect = lazy(
  () => import("../performance/StopUsingUseEffect")
);
const Components = lazy(() => import("../components"));
const MultiFilters = lazy(() => import("../components/Multifilters"));
const WidgetsLayout = lazy(() => import("../components/WidgetsLayout"));

const routes = () => [
  {
    isVisible: true,
    component: () => <Home />,
    name: "Home",
    path: import.meta.env.BASE_URL,
  },
  {
    isVisible: true,
    component: () => <CleanCode />,
    name: "Closures",
    path: `${import.meta.env.BASE_URL}/cleancode`,
  },
  {
    isVisible: true,
    component: () => <ClosuresDemo />,
    name: "Closures",
    path: `${import.meta.env.BASE_URL}/closures`,
  },
  {
    isVisible: true,
    component: () => <Coalescing />,
    name: "Coalescing",
    path: `${import.meta.env.BASE_URL}/coalescing`,
  },
  {
    isVisible: true,
    component: () => <CompositionDemo />,
    name: "Composition",
    path: `${import.meta.env.BASE_URL}/composition`,
  },
  {
    isVisible: true,
    component: () => <Curry />,
    name: "Curry",
    path: `${import.meta.env.BASE_URL}/curry`,
  },
  {
    isVisible: true,
    component: () => <Performance />,
    name: "Performance",
    path: `${import.meta.env.BASE_URL}/performance`,
  },
  {
    isVisible: true,
    component: () => <StopUsingUseEffect />,
    name: "StopUsingUseEffect",
    path: `${import.meta.env.BASE_URL}/useeffect`,
  },
  {
    isVisible: true,
    component: () => <Components />,
    name: "Components",
    path: `${import.meta.env.BASE_URL}/components`,
  },
  {
    isVisible: true,
    component: () => <MultiFilters />,
    name: "MultiFilters",
    path: `${import.meta.env.BASE_URL}/multifilters`,
  },
  {
    isVisible: true,
    component: () => <WidgetsLayout />,
    name: "Widgets",
    path: `${import.meta.env.BASE_URL}/widgets`,
  },
];

export default routes;

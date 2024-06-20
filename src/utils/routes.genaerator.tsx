import { ReactNode } from "react";


type TRoute = {
  path?: string;
  element: ReactNode;
  index?: boolean;
};
type TPath = {
  name?: string;
  path?: string;
  index?: boolean;
  element?: ReactNode;
  children?: TPath[];
};
//function for Generating route

export const routeGenerator = (paths: TPath[]) => {
  const Routes = paths.reduce((acc: TRoute[], item) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path!,
        element: item.element!,
      });
    }
    if (item.index && item.element) {
      acc.push({
        index: item.index!,
        element: item.element!,
      });
    }
    if (item.children) {
      item.children.forEach((child) => {
        acc.push({
          path: child.path!,
          element: child.element!,
        });
      });
    }
    acc.push({
      path: "inventory/create-product",
      element: (
        <div>
       Hi
        </div>
      ),
    });
    return acc;
  }, []);
  return Routes;
};

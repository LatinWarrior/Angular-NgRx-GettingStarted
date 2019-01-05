import { Action } from "@ngrx/store";
import { Product } from "../product";

export enum ProductActionTypes {
      ToggleProductCode = '[Product] Toggle Product Code',
      SetCurrentProduct = '[Product] Set Current Product',
      ClearCurrentProduct = '[Product] Clear Current Product',
      InitializeCurrentProduct = '[Product] Initialize Current Product'
}

export class ToggleProductCode implements Action {
      readonly type = ProductActionTypes.ToggleProductCode;

      constructor(public payload: boolean) { }
}

export class SetCurrentProduct implements Action {
      readonly type = ProductActionTypes.SetCurrentProduct;

      constructor(public payload: Product) { }
}

export class ClearCurrentProduct implements Action {
      readonly type = ProductActionTypes.ClearCurrentProduct;

      constructor() { } // Not needed. TypeScrypt provides default empty constructor.
}

export class InitializeCurrentProduct implements Action {
      readonly type = ProductActionTypes.InitializeCurrentProduct;

      constructor() { } // Not needed. TypeScrypt provides default empty constructor.
}

export type ProductActions =
      ToggleProductCode |
      SetCurrentProduct |
      ClearCurrentProduct |
      InitializeCurrentProduct;
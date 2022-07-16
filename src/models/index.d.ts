import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type CategoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ImageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RatingMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type WishMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Category {
  readonly id: string;
  readonly name: string;
  readonly Products?: (Product | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Category, CategoryMetaData>);
  static copyOf(source: Category, mutator: (draft: MutableModel<Category, CategoryMetaData>) => MutableModel<Category, CategoryMetaData> | void): Category;
}

export declare class Product {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly discount?: number | null;
  readonly categoryID: string;
  readonly Images?: (Image | null)[] | null;
  readonly Ratings?: (Rating | null)[] | null;
  readonly Wishes?: (Wish | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Product, ProductMetaData>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product, ProductMetaData>) => MutableModel<Product, ProductMetaData> | void): Product;
}

export declare class Image {
  readonly id: string;
  readonly name: string;
  readonly productID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Image, ImageMetaData>);
  static copyOf(source: Image, mutator: (draft: MutableModel<Image, ImageMetaData>) => MutableModel<Image, ImageMetaData> | void): Image;
}

export declare class Rating {
  readonly id: string;
  readonly stars: number;
  readonly comment?: string | null;
  readonly productID: string;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Rating, RatingMetaData>);
  static copyOf(source: Rating, mutator: (draft: MutableModel<Rating, RatingMetaData>) => MutableModel<Rating, RatingMetaData> | void): Rating;
}

export declare class Wish {
  readonly id: string;
  readonly userID: string;
  readonly productID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Wish, WishMetaData>);
  static copyOf(source: Wish, mutator: (draft: MutableModel<Wish, WishMetaData>) => MutableModel<Wish, WishMetaData> | void): Wish;
}

export declare class User {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly areaCode?: string | null;
  readonly phone?: string | null;
  readonly zip?: string | null;
  readonly state?: string | null;
  readonly city?: string | null;
  readonly street?: string | null;
  readonly number?: string | null;
  readonly avatar?: string | null;
  readonly Ratings?: (Rating | null)[] | null;
  readonly Wishes?: (Wish | null)[] | null;
  readonly cookie?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}
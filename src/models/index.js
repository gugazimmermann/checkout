// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Category, Product, Image, Rating, Wish, User } = initSchema(schema);

export {
  Category,
  Product,
  Image,
  Rating,
  Wish,
  User
};
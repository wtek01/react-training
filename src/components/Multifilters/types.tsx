export type Filter = "Bags" | "Watches" | "Sports" | "Sunglasses";

export type Item = {
  name: string;
  category: Filter;
};

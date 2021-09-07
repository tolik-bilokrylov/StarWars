export interface StarWarsShip {
  name: string,
  model: string,
  starship_class: string,
  hyperdrive_rating: string,
  passengers: string,
  manufacturer: string,
}

export interface ButtonInfo {
  page: number,
  next: string | null,
  previous: string | null,
}

export interface RootStatePosts {
  posts: any[];
  postId: number;
  userId: number;
};

// export interface RootStatePost {
//   post: Post | null;
//   comments: Comment[];
// }
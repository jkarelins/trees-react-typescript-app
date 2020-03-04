export interface TreeData {
  name: string;
  scientificName: string;
  numLikes: number;
  imgUrl: string;
}

export interface TreeProps {
  name: string;
  scientificName: string;
  numLikes: number;
  imgUrl: string;
  onLike: () => void;
}

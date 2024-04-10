export interface SampleUser {
  id: number;
  name: string;
  profileImageSource: string;
  email: string;
}

interface Owner {
  id: number;
  name: string;
  profileImageSource: string;
}

interface Links {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
}

interface FolderData {
  id: number;
  name: string;
  owner: Owner;
  links: Links;
}

export interface SampleFolder {
  folder: FolderData;
}

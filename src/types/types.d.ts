export type FileSystem = {
  name: string;
  path: string;
  content?: string;
  children: FileSystem[];
}

export type File = {
  name: string;
  path: string;
  content: string;
}

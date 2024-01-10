export interface Items {
  info: Info[];
}

export interface Info {
  id:    number;
  icon:  string;
  title: string;
  items: Item[];
}

export interface Item {
  item?:   string;
  content?: string;
  link?:   string;
}

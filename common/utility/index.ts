import { Option } from "../types";

export function enumToOptions<T>(source: any, labels?: any): Option<T>[] {
  return Object.keys(source).map((key: string) => {
    return { label: enumToLabel(source[key], labels), value: source[key] };
  });
}

export function enumToLabel(source: string, labels?: any) {
  if (labels) {
    return labels[source];
  }
  if (source === "") {
    return "";
  }
  const list = source.split("_");
  return list
    .map((item: string) => {
      const labelItem = item.toLowerCase();
      return labelItem[0].toUpperCase() + labelItem.slice(1);
    })
    .join(" ");
}

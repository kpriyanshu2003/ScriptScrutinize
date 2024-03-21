import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";
import { SubmitType } from "@/@types/submission";
import { getCode, getSubmissions } from "@/api";
import { useRouter } from "next/navigation";
import { decode } from "js-base64";

export default function App() {
  const router = useRouter();
  const [data, setData] = React.useState<SubmitType[]>([]);
  React.useEffect(() => {
    getSubmissions()
      .then((res) => setData(res.data))
      .catch(() => setData([]));
  }, []);

  const columns = [
    { key: "username", value: "Username" },
    { key: "language", value: "Language" },
    { key: "source", value: "Source" },
    { key: "updatedAt", value: "UpdatedAt" },
  ];

  const handleDispData = (
    item: SubmitType,
    columnKey: string | number | bigint
  ) => {
    switch (columnKey) {
      case "source":
        return getCode(getKeyValue(item, columnKey)).then((response) =>
          decode(response.data.code || "").substring(0, 100)
        );
      case "updatedAt":
        return new Date(getKeyValue(item, columnKey)).toLocaleString();
      default:
        return getKeyValue(item, columnKey);
    }
  };

  return (
    <>
      <Table
        aria-label="Submissions Table"
        style={{ border: "none", borderRadius: "0", boxShadow: "none" }}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.key}
              className="text-center text-base py-3"
            >
              {column.value}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={data}>
          {(item) => (
            <TableRow
              key={item.id}
              onClick={() => router.push(`/${item.id}`)}
              className="cursor-pointer"
            >
              {(columnKey) => (
                <TableCell
                  className="text-center"
                  onClick={() => router.push(`/${item.id}`)}
                >
                  {handleDispData(item, columnKey)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}

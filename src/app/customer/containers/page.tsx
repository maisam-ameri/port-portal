import toContainerRow from "@/features/containers/mappers";
import { getContainers } from "@/features/containers/queries";
import { Container, CONTAINER_STATUSES } from "@/features/containers/types";
import { redirect, RedirectType } from "next/navigation";

export default async function Containers(
  params: PageProps<"/customer/containers">,
) {
  const response = await getContainers();
  const containers = response.data;
  const rawParams = await params.searchParams;
  const { status } = rawParams;
  const {searchKey} = rawParams;

  function handleParams() {
    const cleanedParams = Object.entries(rawParams).filter(
      (entry): entry is [string, string] => {
        const [_, value] = entry;
        return (
          typeof value === "string" &&
          value.trim() !== "" &&
          !Array.isArray(value)
        );
      },
    );

    const newQueryString = new URLSearchParams(cleanedParams).toString();
    const targetUrl = newQueryString
      ? `/customer/containers?${newQueryString}`
      : "/customer/containers";

    const currentQueryString = new URLSearchParams(
      Object.entries(rawParams).filter(([_, v]) => typeof v === "string") as [
        string,
        string,
      ][],
    ).toString();
    const currentUrl = currentQueryString
      ? `/customer/containers?${currentQueryString}`
      : "/customer/containers";

    if (targetUrl !== currentUrl) redirect(targetUrl, RedirectType.replace);
  }

  let filteredContainers: Container[] = [...containers];

  if (typeof searchKey === "string") {
    const filteredBySearch = filteredContainers.filter(
      (container) => container.cargoType.toLowerCase().includes(searchKey.toLowerCase()),
    );
    filteredContainers = filteredBySearch.length > 0 ? filteredBySearch: filteredContainers;
  }

  if (typeof status === "string") {
    const  filteredByStatus = filteredContainers.filter(
      (container) => container.status.toString() === status,
    );
    filteredContainers = filteredByStatus.length > 0 ? filteredByStatus: filteredContainers;
  }

  if (status === "" && status === undefined 
    && searchKey === "" && searchKey === undefined
  ) {
    filteredContainers = [...containers];
  }

  handleParams();

  function createRows() {
    return filteredContainers.map((container) => {
      return (
        <tr key={container.id}>
          <td className="text-center">{toContainerRow(container).number}</td>
          <td className="text-center">{toContainerRow(container).type}</td>
          <td className="text-center">{toContainerRow(container).weightKg}</td>
          <td className="text-center">{toContainerRow(container).status}</td>
          <td className="text-center">{toContainerRow(container).cargoType}</td>
          <td className="text-center">
            {toContainerRow(container).arrivalDate}
          </td>
          <td className="text-center">{toContainerRow(container).location}</td>
          <td className="text-center">{toContainerRow(container).shipName}</td>
        </tr>
      );
    });
  }

  return (
    <div>
      <h1>کانتینر ها</h1>
      <form method="get">
        <input defaultValue={searchKey} name="searchKey" placeholder="جستجو"></input>
        <select name="status" defaultValue={status}>
          <option value="">همه</option>
          {CONTAINER_STATUSES.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
        <button type="submit">فیلتر</button>
      </form>
      {filteredContainers.length > 0 ? (
        <table
          className="w-full  
        border-collapse divide-y divide-gray-200 table-fixed text-right text-sm"
        >
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="text-center p-3">شماره</th>
              <th className="text-center p-3">نوع</th>
              <th className="text-center p-3">وزن</th>
              <th className="text-center p-3">وضعیت</th>
              <th className="text-center p-3">نوع کالا</th>
              <th className="text-center p-3">تاریخ ورود</th>
              <th className="text-center p-3">موقعیت</th>
              <th className="text-center p-3">نام کشتی</th>
            </tr>
          </thead>
          <tbody>{createRows()}</tbody>
        </table>
      ) : (
        <p>کانتینری موجود نیست</p>
      )}
    </div>
  );
}

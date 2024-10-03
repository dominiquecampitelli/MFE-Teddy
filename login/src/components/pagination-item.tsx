import { Button } from "./style";

interface PageItemProps {
  num: number;
  active: boolean;
  handleChangePage: (page: number) => void;
}

export function PaginationItem({
  num,
  active,
  handleChangePage,
}: PageItemProps) {
  return (
    <div>
      <Button
        active={active ? true : false}
        onClick={() => handleChangePage(num)}
      >
        {num}
      </Button>
    </div>
  );
}

"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";
import { ShowMoreProps } from "@/types";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;

    const newPathname = updateSearchParams(
      searchParams,
      pathname,
      "limit",
      `${newLimit}`
    );

    router.push(newPathname, { scroll: false });
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          btnType="button"
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;

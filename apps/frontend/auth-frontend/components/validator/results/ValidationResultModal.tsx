import type { ValidationResultType } from "../types/validation";
import InvalidResult from "./InvalidResult";
import RejectedResult from "./RejectedResult";
import SuccessResult from "./SuccessResult";

interface ValidationResultModalProps {
  result: ValidationResultType;
  onReset: () => void;
}

export default function ValidationResultModal({
  result,
  onReset,
}: ValidationResultModalProps) {
  if (!result) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#101415]/90 p-6 backdrop-blur-md">
      {result === "success" && <SuccessResult onReset={onReset} />}
      {result === "rejected" && <RejectedResult onReset={onReset} />}
      {result === "invalid" && <InvalidResult onReset={onReset} />}
    </div>
  );
}

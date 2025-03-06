import { IdForm } from "@/features/id/components/id-form";
import { IdCardSection } from "@/features/id/components/id-card-section";

export default function IdCardGenerator() {
  return (
    <div className="grid sm:grid-cols-2 flex-col md:flex-row md:gap-8 md:justify-between md:p-6">
      <IdForm />
      <IdCardSection />
    </div>
  );
}

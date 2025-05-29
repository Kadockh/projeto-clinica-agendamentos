import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  PageActions,
  PageContainer,
  PageContent,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageTitle,
} from "@/components/ui/page-container";

const DoctorsPage = () => {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Médicos</PageTitle>
          <PageDescription>
            Gerencie os médicos cadastrados no sistema
          </PageDescription>
        </PageHeaderContent>
        <PageActions>
          <Button>
            <Plus />
            Novo Médico
          </Button>
        </PageActions>
      </PageHeader>
      <PageContent>
        <div>
          <h1>Médicos</h1>
        </div>
      </PageContent>
    </PageContainer>
  );
};

export default DoctorsPage;

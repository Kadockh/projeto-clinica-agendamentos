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

import { SubscriptionPlan } from "./_components/subscription-plan";

const SubscriptionPage = () => {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Assinatura</PageTitle>
          <PageDescription>Gerencie a sua assinatura.</PageDescription>
        </PageHeaderContent>
        <PageActions>
          <Button variant="outline">Cancelar assinatura</Button>
        </PageActions>
      </PageHeader>
      <PageContent>
        <SubscriptionPlan className="w-[350px]" />
      </PageContent>
    </PageContainer>
  );
};

export default SubscriptionPage;

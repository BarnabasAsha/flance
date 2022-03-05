import { DashboardContent, DashboardHeader } from "../components/organisms"
import { DashboardLayout } from "../components/templates"

const Dashboard = () => {
  return (
    <div>
      <DashboardLayout>
        <DashboardHeader />
        <DashboardContent />
      </DashboardLayout>
    </div>
  )
}

export default Dashboard
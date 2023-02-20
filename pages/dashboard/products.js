import { Grid } from "@nextui-org/react";
import DasboardLayout from "../../components/Layout/layout"

export default function DashboardProducts(){
    return(
      <DasboardLayout>

        <h1 className="h4">Products</h1>
        <Grid.Container>
        <table class="table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Price</th>
      <th>Stock</th>
      <th>Category</th>
      <th>Tags</th>
      <th>Attributes</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    
  </tbody>
  <tfoot>
    
  </tfoot>
</table>
        </Grid.Container>
        
        </DasboardLayout>
    )
}
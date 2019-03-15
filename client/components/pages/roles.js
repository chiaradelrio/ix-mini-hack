import { SkillsList, FormItem } from "../molecules";

const Roles = () => (
  <div>
    <h1>Roles page</h1>
    <FormItem
      title="Description: "
      text="This role will be the best role you ever do"
    />
    <SkillsList />
    <FormItem title="Previous person in this role: " text="Django Shelton" />
  </div>
);

export default Roles;

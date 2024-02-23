import CreateAccountForm from "../comps/CreateAccountDeatails/CreateAccountForm";
import CreateAccountHeader from "../comps/CreateAccountDeatails/CreateAccountHeader";

function createAccount() {
  return (
    <div className="account">
      <div className="backgroundHeaders"></div>
      <div className="layers">
        <CreateAccountHeader />
      </div>
      <div className="container">
        <CreateAccountForm />
      </div>
    </div>
  );
}

export default createAccount;

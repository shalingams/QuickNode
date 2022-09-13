export default function ProtectedRoute(comp: any) {
  const user = true;
  if (!user) {
    // user is not authenticated
    return <div>Login</div>;
  }
  return comp.children;
}

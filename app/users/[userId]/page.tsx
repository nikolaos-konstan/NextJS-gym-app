type Params = {
  params: {
    userId: string;
  };
};

export default function UserPage({ params: { userId } }: Params) {
  return (
    <>
      <h1>UserPage Page</h1>
    </>
  );
}

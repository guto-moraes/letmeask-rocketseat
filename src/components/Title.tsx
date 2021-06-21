type Text = {
  title: string
}

export function Title( props: Text ) {
  return (
    <h1>{props.title}</h1>
  );
}
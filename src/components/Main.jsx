import Card from "./posts/card";

export default function Main() {
  return (
    <main className="page-main">
      <section>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Card />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

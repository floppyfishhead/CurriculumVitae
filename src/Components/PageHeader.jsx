function PageHeader({ eyebrow, title, children }) {
  return (
    <header className="page-header">
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {children && <p className="lead col-lg-8">{children}</p>}
      </div>
    </header>
  );
}

export default PageHeader;

const FooteriListItems = Prop => {
  return (
    <div className="text-[#51565a]">
      <h4 className="text-md uppercase mb-4 font-bold ">{Prop.name}</h4>
      <ol className="flex flex-col gap-4">
        {Prop.value.map(product => (
          <li key={product.id} className="text-xs">
            <a href="" className="hover:text-sky-600 ">
              {product.value}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default FooteriListItems;

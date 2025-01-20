const Input = ({ className='' ,Icon,error, ...props }) => {
    return (
      <div className="relative flex items-center w-full">
        {Icon && (
          <span className="absolute left-4 text-[#9D9D9D]">
            <Icon size={24} />
          </span>
        )}
        <input
          {...props}
          className={`${Icon && 'pl-12'} ${error && 'ring-red-600'} ${className} transition-all  duration-300 p-4 h9 outline-none focus:ring-2 ring-[#333333] rounded-xl bg-[#090909] border border-[#333333] text-white  placeholder:text-primary-100  text-[18px] w-full`}
          
        />
      </div>
    );
  };
  
  export default Input;
import Markdown from 'markdown-to-jsx';

const themeClassMap = {
  primary: 'bg-violet-800 text-white',
  dark: 'bg-gray-600 text-white',
};

export const Stats = (props) => {
  return (
    <div className={`py-24 px-12 text-center ${themeClassMap[props.theme] ?? themeClassMap['dark']}`} data-sb-field-path={props['data-sb-field-path']}>
      <div className="mx-auto">
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className="mb-4 text-4xl sm:text-5xl" data-sb-field-path=".heading">{props.heading}</h2>
          <Markdown options={{ forceBlock: true }} className="sm:text-xl" data-sb-field-path=".body">
            {props.body}
          </Markdown>
        </div>
        <div className="grid max-w-3xl gap-12 mx-auto sm:grid-cols-3" data-sb-field-path=".stats">
          {props.stats.length > 0 &&
            props.stats.map((stat, idx) => <StatItem key={idx} theme={props.theme} {...stat} data-sb-field-path={`.${idx}`} />)}
        </div>
      </div>
    </div>
  );
};

const itemThemeClassMap = {
  primary: 'bg-violet-700',
  dark: 'bg-gray-500',
};

const StatItem = (props) => {
  return (
    <div className={`px-4 py-8 rounded-md ${itemThemeClassMap[props.theme] ?? itemThemeClassMap['dark']}`} data-sb-field-path={props['data-sb-field-path']} >
      <div className="mb-3 text-3xl sm:text-4xl" data-sb-field-path=".value">{props.value}</div>
      <div className="text-sm uppercase" data-sb-field-path=".label">{props.label}</div>
    </div>
  );
};

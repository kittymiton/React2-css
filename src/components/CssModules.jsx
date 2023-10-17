// 変数classesにクラスの塊が入ってくる ページ単体に使用できクラス名の競合を回避できる
import classes from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>- CSS Modules -</p>
      <button className={classes.button}>Fight!!</button>
    </div>
  );
};

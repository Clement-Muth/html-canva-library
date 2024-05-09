import {
  Application,
  Assets,
  Container,
  Text,
  Texture,
  TilingSprite,
} from "../library";

(async () => {
  const application = new Application();

  await application.init({ background: "white", resizeTo: window });
  await Assets.load([{ alias: "cat", src: "./src/js/cat.png" }]);

  const menu = new Container();
  const catContainer = new Container();
  const title = new Text({ text: "Bonjour", style: { fill: "black" } });
  const cat = new TilingSprite({
    texture: Texture.from("cat"),
    height: 200,
    width: 300,
  });

  title.interactive = true;
  title.onClick(() => {
    alert("ok");
  });

  menu.x = 0;
  menu.y = 20;

  catContainer.addChild(cat);
  menu.addChild(title);

  catContainer.y = application.screen.height - cat.height;

  application.stage.addChild(menu, catContainer);
})();

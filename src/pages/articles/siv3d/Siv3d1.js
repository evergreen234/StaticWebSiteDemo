import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { ArticleFrame } from '../../../components/ArticleFrame';
import Code from 'react-code-prettify';

export class Siv3d1 extends Component {
  static displayName = Siv3d1.name;

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const codeString = 
    `
    void Main()
    {
      Window::Resize(1280, 720);
    
      constexpr Rect region(40, 40, 1200, 640);
      constexpr ColorF objectColor = Palette::Deepskyblue;
      const Array<Triangle> triangles{ Triangle(120, 120, 300, 120, 120, 500) };
      const Array<RectF> rects{ Rect(600, 40, 40, 260), RectF(440, 300, 440, 40), RectF(1040, 300, 200, 40), Rect(480, 480, 240, 100) };
      const Array<Circle> circles{ Circle(1000, 500, 80),  Circle(460, 180, 30), Circle(240, 480, 30), Circle(300, 560, 30) };
      const Array<Polygon> polygons{ Shape2D::Star(60, Vec2(940, 180)) };
    
      while (System::Update())
      {
        Cursor::RequestStyle(CursorStyle::Hidden);
    
        for (const auto& triangle : triangles)
          triangle.draw(objectColor);
    
        for (const auto& rect : rects)
          rect.draw(objectColor);
    
        for (const auto& circle : circles)
          circle.draw(objectColor);
    
        for (const auto& polygon : polygons)
          polygon.draw(objectColor);
    
        region.drawFrame(0, 8, objectColor);
    
        const Vec2 eyePos = Cursor::Pos();
    
        Circle(eyePos, 20).draw(Palette::Orange).drawFrame(1, 2);
      }
    }`


    return (
      <ArticleFrame>
        <h1 class="pb-2 mb-4 border-bottom">スプライトシート作成アプリ</h1>
        <h2 class="pb-2 mb-4 border-bottom">ソースコードあああああ</h2>
        <Code codeString={codeString} language="C++" />

        <h2 class="pb-2 mb-4 border-bottom">ソースコードその２</h2>
        
        <div class="blog-post">
          <p>あいうえお</p>
          <p>また、デストラクタによって参照カウンタが 0 になった時点で、画像や音声などのアセットデータを自動的にメモリから解放するので、次のプログラムのように破棄の処理を明示的に記述する必要もありません。Siv3D のクラスは、ポインタを使わずにそのまま扱うのが作法です。</p>
          <blockquote>
            <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
          </blockquote>
          <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
          <h2>Heading</h2>
          <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <h3>Sub-heading</h3>
          <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          <pre><code>Example code block</code></pre>
          <p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>
          <h3>Sub-heading</h3>
          <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
          <ul>
            <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
            <li>Donec id elit non mi porta gravida at eget metus.</li>
            <li>Nulla vitae elit libero, a pharetra augue.</li>
          </ul>
          <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
          <ol>
            <li>Vestibulum id ligula porta felis euismod semper.</li>
            <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
            <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
          </ol>
          <p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>
        </div>
      </ArticleFrame>
    );
  }
}

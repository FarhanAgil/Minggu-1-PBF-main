import React, {Component} from 'react';
import Image from './Image';

class List extends Component {
    render() {
        return(
            <div>
                <ol>
                    <li>
                        satu 
                        <Image linkgambar = 'https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg' />
                    </li>
                    <li>
                        dua
                        <Image linkgambar = 'https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg' />
                    </li>
                    <li>
                        tiga
                        <Image linkgambar = 'https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png' />
                    </li>
                    <li>
                        empat
                        <Image linkgambar = 'https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png' />
                    </li>
                </ol>
            </div>
        );
    }
}
export default List;
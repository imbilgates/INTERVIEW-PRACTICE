const Modal = ({ showModal, setShowModal }) => {
  if (!showModal) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="modal-backdrop fade show"></div>

      {/* Modal */}
      <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}>
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Header</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowModal(false)}
              ></button>
            </div>
            <div className="modal-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ex vero doloremque eum, possimus deleniti quisquam? Facere, vero commodi neque fugiat autem omnis, dolor repudiandae sapiente cum quod earum vitae temporibus rerum ipsa, numquam et illo provident harum velit asperiores reprehenderit. Quam inventore consequuntur non dolorem ab minus soluta, voluptate commodi fugiat sed adipisci laudantium hic assumenda quisquam asperiores facilis rerum voluptas, magnam quo quasi eveniet accusamus et? Amet accusamus eos necessitatibus quas nemo excepturi saepe quibusdam fuga recusandae repudiandae ducimus quos velit sit vitae, delectus eius repellendus corrupti voluptatibus natus maiores dolore aspernatur nostrum. Accusantium autem veniam fugiat nobis, amet consequuntur quos, cum quo minus est ea sequi! Laborum modi qui ab esse, odit iste neque eos voluptas aspernatur quis eum. Officiis voluptates distinctio fugiat aliquam maiores, tempora explicabo. Ipsum, veritatis! Commodi laboriosam amet corrupti consectetur, dolorum fugit praesentium doloremque, ratione quisquam animi quae non quia hic architecto, alias atque. Quas ut placeat unde ipsa, quae sapiente ducimus in ratione nisi obcaecati. Tenetur provident in nulla praesentium repellat mollitia. Excepturi nihil consequatur nisi consectetur veniam eos sequi optio minus perferendis eius. Velit accusamus esse ullam enim repellendus eius et non labore laudantium, ex nihil facilis accusantium? Perspiciatis, deserunt obcaecati!
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
 
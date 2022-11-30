import React from 'react';

const Integration = () => {
  const integrations = [
    {
      title: 'Continuous Delivery',
      logs: [
        {
          title: 'Kubernetes',
          logo: '/img/logs/k8s.svg',
        },
      ],
    },
    {
      title: 'Observability & Infrastructure',
      logs: [
        {
          title: 'Prometheus',
          logo: '/img/logs/prometheus-icon.svg',
        },
        {
          title: 'Loki',
          logo: '/img/logs/loki.svg',
        },
        {
          title: 'Grafana',
          logo: '/img/logs/grafana.png',
        },
      ],
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <h2 className="title">Integrated with all your tools</h2>
        </div>

        <div class="rotating-tools-wrapper container">
          {integrations.map((group) => {
            return (
              <div
                key={group.title}
                title={group.title}
                class="rotate-tools-wrapper row"
              >
                {group.logs.map((item) => {
                  return (
                    <div key={item.title} class="span3">
                      <div class="tool-circle-item">
                        <img
                          src={item.logo}
                          loading="lazy"
                          title={item.title}
                          alt={item.title}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Integration;
